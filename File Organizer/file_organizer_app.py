import os
import shutil
import mimetypes
from datetime import datetime
import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext
import json # New: for saving/loading undo log

# --- Configuration for File Categories (from Canvas F3, F4, F5, F9) ---
FILE_CATEGORIES = {
    "Images": {
        "extensions": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp"],
        "mimetypes": ["image/"]
    },
    "Documents": {
        "extensions": [".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt", ".ppt", ".pptx", ".xls", ".xlsx", ".csv", ".json", ".xml"],
        "mimetypes": ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument", "text/plain", "application/json", "application/xml"]
    },
    "Videos": {
        "extensions": [".mp4", ".mov", ".avi", ".mkv", ".flv", ".wmv"],
        "mimetypes": ["video/"]
    },
    "Audio": {
        "extensions": [".mp3", ".wav", ".aac", ".flac", ".ogg"],
        "mimetypes": ["audio/"]
    },
    "Archives": {
        "extensions": [".zip", ".rar", ".7z", ".tar", ".gz"],
        "mimetypes": ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed", "application/gzip"]
    },
    "Executables": {
        "extensions": [".exe", ".msi", ".dmg", ".app"],
        "mimetypes": ["application/x-msdownload", "application/octet-stream"]
    },
    "Code": {
        "extensions": [".py", ".js", ".html", ".css", ".java", ".c", ".cpp", ".php", ".json", ".xml"],
        "mimetypes": ["text/x-python", "application/javascript", "text/html", "text/css", "text/x-java-source"]
    }
    # Add more categories as needed!
}

# --- Helper Functions (Backend Logic) ---

def get_file_category(file_path):
    """
    F3, F4: Determines the category of a file based on its extension and MIME type.
    """
    file_name = os.path.basename(file_path)
    _, file_extension = os.path.splitext(file_name)
    file_extension = file_extension.lower()

    mime_type, _ = mimetypes.guess_type(file_path)
    if mime_type:
        mime_type = mime_type.lower()

    for category, rules in FILE_CATEGORIES.items():
        if file_extension in rules.get("extensions", []):
            return category
        for mime_rule in rules.get("mimetypes", []):
            if mime_type and mime_type.startswith(mime_rule):
                return category
    return "Others"

def organize_single_file(source_file_path, destination_base_dir, log_func):
    """
    F5, F6, F7, F9: Categorizes a single file, determines its destination,
    creates necessary folders, and moves the file. Handles duplicates.
    Returns (True, original_path, new_path) on success, (False, None, None) on failure.
    """
    file_name = os.path.basename(source_file_path)

    if file_name == os.path.basename(__file__):
        log_func(f"Skipping script file: '{file_name}'")
        return False, None, None

    category = get_file_category(source_file_path)
    
    if category in ["Images", "Videos"]:
        try:
            timestamp = os.path.getmtime(source_file_path)
            dt_object = datetime.fromtimestamp(timestamp)
            year_folder = str(dt_object.year)
            month_folder = dt_object.strftime("%Y-%m")
            target_dir = os.path.join(destination_base_dir, category, year_folder, month_folder)
        except Exception as e:
            log_func(f"Warning: Could not get date for '{file_name}': {e}. Placing in general category folder.")
            target_dir = os.path.join(destination_base_dir, category)
    else:
        target_dir = os.path.join(destination_base_dir, category)

    os.makedirs(target_dir, exist_ok=True)

    destination_file_path = os.path.join(target_dir, file_name)
    original_file_path_for_log = source_file_path # Store original path for undo

    # Handle duplicate file names (F7)
    if os.path.exists(destination_file_path):
        base, ext = os.path.splitext(file_name)
        timestamp_str = datetime.now().strftime("%Y%m%d%H%M%S%f")
        new_file_name = f"{base}_{timestamp_str}{ext}"
        destination_file_path = os.path.join(target_dir, new_file_name)
        log_func(f"Duplicate found: '{file_name}'. Renaming to '{new_file_name}' to avoid overwrite.")

    try:
        shutil.move(source_file_path, destination_file_path) # F6
        log_func(f"Moved '{os.path.relpath(original_file_path_for_log, os.path.dirname(original_file_path_for_log))}' to '{os.path.relpath(target_dir, destination_base_dir)}'")
        return True, original_file_path_for_log, destination_file_path # Return success and paths for undo log
    except Exception as e:
        log_func(f"Error moving '{file_name}': {e}")
        return False, None, None

# --- GUI Application (Tkinter) ---

class FileOrganizerApp:
    def __init__(self, master):
        self.master = master
        master.title("File Organizer App (Phase 1 MVP with Undo)") # F10
        master.geometry("800x650") # Slightly increased height for new button

        self.source_dir = tk.StringVar()
        self.destination_dir = tk.StringVar()
        self.undo_log_file = "file_organizer_undo_log.json" # File to store undo history
        self.current_undo_session = [] # List to store moves for the current session

        # Frame for input fields
        input_frame = tk.Frame(master, padx=10, pady=10)
        input_frame.pack(fill=tk.X)

        # Source Folder Selection (F1)
        tk.Label(input_frame, text="Source Folder:").grid(row=0, column=0, sticky="w", pady=5)
        self.source_entry = tk.Entry(input_frame, textvariable=self.source_dir, width=60)
        self.source_entry.grid(row=0, column=1, padx=5, pady=5)
        tk.Button(input_frame, text="Browse", command=self.browse_source_folder).grid(row=0, column=2, padx=5, pady=5)

        # Add right-click context menu to source_entry
        self.source_context_menu = tk.Menu(self.master, tearoff=0)
        self.source_context_menu.add_command(label="Browse...", command=self.browse_source_folder)
        self.source_entry.bind("<Button-3>", self.show_source_context_menu) # Button-3 is right-click

        # Destination Folder Selection (F2)
        tk.Label(input_frame, text="Destination Folder:").grid(row=1, column=0, sticky="w", pady=5)
        self.destination_entry = tk.Entry(input_frame, textvariable=self.destination_dir, width=60)
        self.destination_entry.grid(row=1, column=1, padx=5, pady=5)
        tk.Button(input_frame, text="Browse", command=self.browse_destination_folder).grid(row=1, column=2, padx=5, pady=5)

        # Buttons Frame
        buttons_frame = tk.Frame(master, padx=10, pady=5)
        buttons_frame.pack(fill=tk.X)

        # Start Organization Button
        self.organize_button = tk.Button(buttons_frame, text="Start Organization", command=self.start_organization_process, font=("Arial", 12, "bold"))
        self.organize_button.pack(side=tk.LEFT, padx=5, pady=5, expand=True)

        # Undo Last Organization Button (F15)
        self.undo_button = tk.Button(buttons_frame, text="Undo Last Organization", command=self.undo_last_organization, font=("Arial", 12), state=tk.DISABLED)
        self.undo_button.pack(side=tk.RIGHT, padx=5, pady=5, expand=True)
        
        # Check if an undo log exists on startup and enable button if so
        self._check_and_enable_undo_button()


        # Log Display (F12)
        tk.Label(master, text="Activity Log:").pack(anchor="w", padx=10, pady=5)
        self.log_text = scrolledtext.ScrolledText(master, wrap=tk.WORD, width=90, height=20, font=("Consolas", 10))
        self.log_text.pack(padx=10, pady=5, fill=tk.BOTH, expand=True)
        self.log_text.config(state=tk.DISABLED) # Make it read-only

        # Progress Display (F11)
        self.progress_label = tk.Label(master, text="Status: Ready", anchor="w")
        self.progress_label.pack(fill=tk.X, padx=10, pady=5)

    def log_message(self, message):
        """F12: Appends a message to the log display."""
        self.log_text.config(state=tk.NORMAL)
        self.log_text.insert(tk.END, message + "\n")
        self.log_text.see(tk.END)
        self.log_text.config(state=tk.DISABLED)

    def browse_source_folder(self):
        """F1: Opens a dialog to select the source folder."""
        folder_selected = filedialog.askdirectory()
        if folder_selected:
            self.source_dir.set(folder_selected)
            self.log_message(f"Source folder selected: {folder_selected}")

    def browse_destination_folder(self):
        """F2: Opens a dialog to select the destination folder."""
        folder_selected = filedialog.askdirectory()
        if folder_selected:
            self.destination_dir.set(folder_selected)
            self.log_message(f"Destination folder selected: {folder_selected}")

    def show_source_context_menu(self, event):
        """Displays the right-click context menu for the source folder entry."""
        try:
            self.source_context_menu.tk_popup(event.x_root, event.y_root)
        finally:
            self.source_context_menu.grab_release()

    def _save_undo_log(self):
        """Saves the current organization session's moves to a JSON file."""
        if not self.current_undo_session:
            # If no files were moved, ensure no empty log is saved
            if os.path.exists(self.undo_log_file):
                os.remove(self.undo_log_file) # Remove old log if empty
            self.undo_button.config(state=tk.DISABLED)
            return

        try:
            with open(self.undo_log_file, 'w') as f:
                json.dump(self.current_undo_session, f, indent=4)
            self.log_message(f"Undo log saved to '{self.undo_log_file}'.")
            self.undo_button.config(state=tk.NORMAL) # Enable undo button after successful save
        except Exception as e:
            self.log_message(f"Error saving undo log: {e}")
            messagebox.showerror("Error", f"Could not save undo log: {e}")

    def _load_undo_log(self):
        """Loads the last organization session's moves from a JSON file."""
        if os.path.exists(self.undo_log_file):
            try:
                with open(self.undo_log_file, 'r') as f:
                    return json.load(f)
            except json.JSONDecodeError as e:
                self.log_message(f"Error reading undo log (corrupted JSON?): {e}")
                messagebox.showerror("Error", "Undo log file is corrupted. Cannot undo.")
                os.remove(self.undo_log_file) # Delete corrupted log
                self.undo_button.config(state=tk.DISABLED)
                return []
            except Exception as e:
                self.log_message(f"Error loading undo log: {e}")
                messagebox.showerror("Error", f"Could not load undo log: {e}")
                return []
        return []

    def _clear_undo_log(self):
        """Clears the undo log file."""
        if os.path.exists(self.undo_log_file):
            os.remove(self.undo_log_file)
            self.log_message("Undo log cleared.")
        self.undo_button.config(state=tk.DISABLED) # Disable undo button after clear

    def _check_and_enable_undo_button(self):
        """Checks if an undo log exists and enables the undo button on startup."""
        if os.path.exists(self.undo_log_file):
            try:
                with open(self.undo_log_file, 'r') as f:
                    log_data = json.load(f)
                if log_data: # Only enable if the log actually contains moves
                    self.undo_button.config(state=tk.NORMAL)
                    self.log_message("Previous undo session found. 'Undo Last Organization' button is enabled.")
                else:
                    self.undo_button.config(state=tk.DISABLED)
            except Exception:
                self.undo_button.config(state=tk.DISABLED) # Disable if log is empty or corrupted

    def start_organization_process(self):
        """
        Initiates the file organization process.
        F1-F9 (excluding F13, F15 for Phase 2, but now F15 is included).
        """
        source = self.source_dir.get()
        destination = self.destination_dir.get()

        if not source or not os.path.isdir(source):
            messagebox.showerror("Error", "Please select a valid source folder.")
            self.log_message("Error: Invalid source folder selected.")
            return
        if not destination or not os.path.isdir(destination):
            messagebox.showerror("Error", "Please select a valid destination folder.")
            self.log_message("Error: Invalid destination folder selected.")
            return

        # Confirm with user before proceeding, as this moves files
        if not messagebox.askyesno("Confirm Organization", 
                                   f"Are you sure you want to organize files from '{source}' to '{destination}'?\n"
                                   "This operation will move files and will generate an undo log for reversal."):
            self.log_message("Organization cancelled by user.")
            return

        # Clear previous log and current session data
        self.log_text.config(state=tk.NORMAL)
        self.log_text.delete(1.0, tk.END)
        self.log_text.config(state=tk.DISABLED)
        self.current_undo_session = [] # Reset undo log for new session

        self.log_message(f"Starting organization from '{source}' to '{destination}'...")
        self.progress_label.config(text="Status: Organizing files...")
        self.organize_button.config(state=tk.DISABLED)
        self.undo_button.config(state=tk.DISABLED) # Disable undo during organization

        output_base_dir = os.path.join(destination, "Organized_Files")
        os.makedirs(output_base_dir, exist_ok=True)
        self.log_message(f"Organized files will be placed in: {output_base_dir}")

        total_files = 0
        processed_files = 0
        
        # First pass to count files
        for root, _, files in os.walk(source):
            if root.startswith(output_base_dir):
                continue
            for file_name in files:
                if os.path.isfile(os.path.join(root, file_name)) and file_name != os.path.basename(__file__):
                    total_files += 1

        self.log_message(f"Found {total_files} files to process.")
        self.progress_label.config(text=f"Status: Processing 0/{total_files} files...")

        # Second pass to organize files
        for root, _, files in os.walk(source):
            if root.startswith(output_base_dir):
                continue

            for file_name in files:
                source_file_path = os.path.join(root, file_name)
                
                if os.path.isfile(source_file_path) and file_name != os.path.basename(__file__):
                    success, original_path, new_path = organize_single_file(source_file_path, output_base_dir, self.log_message)
                    if success:
                        self.current_undo_session.append({"original": original_path, "new": new_path})
                        processed_files += 1
                        self.progress_label.config(text=f"Status: Processing {processed_files}/{total_files} files...")
                        self.master.update_idletasks()

        self._save_undo_log() # Save the log after the process
        self.log_message("Organization process complete!")
        self.progress_label.config(text=f"Status: Done. Organized {processed_files} files.")
        self.organize_button.config(state=tk.NORMAL)
        self.undo_button.config(state=tk.NORMAL if self.current_undo_session else tk.DISABLED) # Enable if there were moves


    def undo_last_organization(self):
        """
        F15: Reverses the last organization operation using the saved log.
        """
        undo_moves = self._load_undo_log()

        if not undo_moves:
            messagebox.showinfo("Undo", "No previous organization to undo or log is empty.")
            self.log_message("Undo: No previous organization to undo.")
            self.undo_button.config(state=tk.DISABLED)
            return

        if not messagebox.askyesno("Confirm Undo", 
                                   f"Are you sure you want to undo the last organization?\n"
                                   f"This will attempt to move {len(undo_moves)} files back to their original locations."):
            self.log_message("Undo operation cancelled by user.")
            return

        self.log_message("Starting undo operation...")
        self.progress_label.config(text="Status: Undoing changes...")
        self.organize_button.config(state=tk.DISABLED) # Disable organize during undo
        self.undo_button.config(state=tk.DISABLED) # Disable undo during undo

        successful_undos = 0
        failed_undos = 0

        # Iterate in reverse order to undo moves (last moved file is undone first)
        for move in reversed(undo_moves):
            original_path = move["original"]
            new_path = move["new"]

            if os.path.exists(new_path):
                try:
                    # Ensure the parent directory of original_path exists before moving back
                    os.makedirs(os.path.dirname(original_path), exist_ok=True)
                    shutil.move(new_path, original_path)
                    self.log_message(f"Undid: Moved '{os.path.basename(new_path)}' from '{os.path.relpath(os.path.dirname(new_path), self.destination_dir.get())}' back to original.")
                    successful_undos += 1
                except Exception as e:
                    self.log_message(f"Error undoing '{os.path.basename(new_path)}' to '{original_path}': {e}. File might have been moved/deleted/renamed manually.")
                    failed_undos += 1
            else:
                self.log_message(f"Skipped undo for '{os.path.basename(new_path)}': File not found at new location. It might have been moved/deleted manually.")
                failed_undos += 1
            self.master.update_idletasks() # Update GUI

        # Clean up empty directories after undoing moves
        self.log_message("Attempting to clean up empty organized folders...")
        for category_folder in os.listdir(os.path.join(self.destination_dir.get(), "Organized_Files")):
            category_path = os.path.join(self.destination_dir.get(), "Organized_Files", category_folder)
            if os.path.isdir(category_path):
                try:
                    # Walk from deepest subdirectories up
                    for dirpath, dirnames, filenames in os.walk(category_path, topdown=False):
                        if not dirnames and not filenames: # If directory is empty
                            os.rmdir(dirpath)
                            self.log_message(f"Removed empty directory: {os.path.relpath(dirpath, self.destination_dir.get())}")
                except Exception as e:
                    self.log_message(f"Error cleaning up directory {os.path.relpath(category_path, self.destination_dir.get())}: {e}")


        self._clear_undo_log() # Clear the log after successful undo
        self.log_message(f"Undo operation complete! Successfully undid {successful_undos} files, {failed_undos} failed.")
        self.progress_label.config(text="Status: Undo Complete.")
        self.organize_button.config(state=tk.NORMAL)
        self.undo_button.config(state=tk.DISABLED) # Undo button disabled until next organization

# --- Main Application Entry Point ---
if __name__ == "__main__":
    root = tk.Tk()
    app = FileOrganizerApp(root)
    root.mainloop()

