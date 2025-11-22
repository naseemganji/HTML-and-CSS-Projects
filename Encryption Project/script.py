from cryptography.fernet import Fernet
import base64
import hashlib

class SimpleEncryption:
    def __init__(self, password=None):
        """
        Initialize encryption with a password or generate a random key
        """
        if password:
            # Create a key from password using SHA-256
            key = hashlib.sha256(password.encode()).digest()
            # Fernet requires base64 encoded 32-byte key
            self.key = base64.urlsafe_b64encode(key)
        else:
            # Generate a random key
            self.key = Fernet.generate_key()
        
        self.cipher = Fernet(self.key)
    
    def get_key(self):
        """Return the encryption key (for sharing or storage)"""
        return self.key.decode()
    
    def encrypt(self, text):
        """
        Encrypt the given text
        Args:
            text (str): Text to encrypt
        Returns:
            str: Encrypted text (base64 encoded)
        """
        try:
            # Convert string to bytes
            text_bytes = text.encode('utf-8')
            # Encrypt the bytes
            encrypted_bytes = self.cipher.encrypt(text_bytes)
            # Return as base64 string for easy handling
            return encrypted_bytes.decode('utf-8')
        except Exception as e:
            return f"Encryption error: {str(e)}"
    
    def decrypt(self, encrypted_text):
        """
        Decrypt the given encrypted text
        Args:
            encrypted_text (str): Encrypted text to decrypt
        Returns:
            str: Original decrypted text
        """
        try:
            # Convert string back to bytes
            encrypted_bytes = encrypted_text.encode('utf-8')
            # Decrypt the bytes
            decrypted_bytes = self.cipher.decrypt(encrypted_bytes)
            # Return as string
            return decrypted_bytes.decode('utf-8')
        except Exception as e:
            return f"Decryption error: {str(e)}"

def main():
    """
    Main function to demonstrate encryption/decryption
    """
    print("=== Python Encryption/Decryption Tool ===\n")
    
    # Option to use password or random key
    use_password = input("Use password? (y/n): ").lower().strip() == 'y'
    
    if use_password:
        password = input("Enter password: ")
        encryptor = SimpleEncryption(password)
        print(f"Using password-based encryption")
    else:
        encryptor = SimpleEncryption()
        print(f"Generated key: {encryptor.get_key()}")
        print("Save this key to decrypt messages later!\n")
    
    while True:
        print("\nOptions:")
        print("1. Encrypt text")
        print("2. Decrypt text")
        print("3. Show current key")
        print("4. Exit")
        
        choice = input("\nEnter choice (1-4): ").strip()
        
        if choice == '1':
            text = input("Enter text to encrypt: ")
            encrypted = encryptor.encrypt(text)
            print(f"\nOriginal text: {text}")
            print(f"Encrypted text: {encrypted}")
            
        elif choice == '2':
            encrypted_text = input("Enter encrypted text to decrypt: ")
            decrypted = encryptor.decrypt(encrypted_text)
            print(f"\nEncrypted text: {encrypted_text}")
            print(f"Decrypted text: {decrypted}")
            
        elif choice == '3':
            print(f"\nCurrent key: {encryptor.get_key()}")
            
        elif choice == '4':
            print("Goodbye!")
            break
            
        else:
            print("Invalid choice. Please try again.")

# Example usage
if __name__ == "__main__":
    # Demo with example
    print("=== Quick Demo ===")
    demo_encryptor = SimpleEncryption("mypassword123")
    
    original_text = "Hello, this is a secret message!"
    encrypted_text = demo_encryptor.encrypt(original_text)
    decrypted_text = demo_encryptor.decrypt(encrypted_text)
    
    print(f"Original: {original_text}")
    print(f"Encrypted: {encrypted_text}")
    print(f"Decrypted: {decrypted_text}")
    print(f"Success: {original_text == decrypted_text}")
    print("\n" + "="*50 + "\n")
    
    # Run interactive mode
    main()
