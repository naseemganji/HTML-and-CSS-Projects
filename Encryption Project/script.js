// The core encryption logic remains the same
class SimpleCipher {
    constructor(password) {
        this.password = password;
        this.key = this.deriveKey(password);
    }

    deriveKey(password) {
        const salt = "MySuperSecretSalt2024!";
        const combined = password + salt;
        const key = [];
        for (let i = 0; i < 256; i++) {
            let value = 0;
            for (let j = 0; j < combined.length; j++) {
                value = (value * 31 + combined.charCodeAt(j) + i) % 256;
            }
            key.push(value);
        }
        return key;
    }

    substitute(char, encrypt = true) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_+-=[]{}|;:,.<>?";
        const cipher = "m3Cv2Pz8qA7wX9LsK6YuI1oN0pR5tE4yU!iO@pA#sD$fG%hJ^kL&zX*cV(bN)_+M-=Q[w]e{r}t|y;u:i,o.p<a>s?dFgHjKlZxCvBn";

        if (encrypt) {
            const index = alphabet.indexOf(char);
            return index !== -1 ? cipher[index] : char;
        } else {
            const index = cipher.indexOf(char);
            return index !== -1 ? alphabet[index] : char;
        }
    }

    calculateChecksum(data) {
        let checksum = 0;
        for (let i = 0; i < data.length; i++) {
            checksum = (checksum + data.charCodeAt(i) * (i + 1)) % 65536;
        }
        return checksum.toString(16).padStart(4, '0');
    }

    encrypt(plaintext) {
        try {
            let substituted = "";
            for (let char of plaintext) {
                substituted += this.substitute(char, true);
            }
            let encrypted = "";
            for (let i = 0; i < substituted.length; i++) {
                const keyByte = this.key[i % this.key.length];
                const charCode = substituted.charCodeAt(i);
                const encryptedChar = charCode ^ keyByte;
                encrypted += String.fromCharCode(encryptedChar);
            }
            const checksum = this.calculateChecksum(plaintext);
            const withChecksum = checksum + "|" + encrypted;
            return btoa(unescape(encodeURIComponent(withChecksum)));
        } catch (error) {
            return `Encryption error: ${error.message}`;
        }
    }

    decrypt(ciphertextB64) {
        try {
            const withChecksum = decodeURIComponent(escape(atob(ciphertextB64)));
            const parts = withChecksum.split("|");
            if (parts.length !== 2) {
                return "Error: Invalid format";
            }
            const [receivedChecksum, encrypted] = parts;
            let substituted = "";
            for (let i = 0; i < encrypted.length; i++) {
                const keyByte = this.key[i % this.key.length];
                const encryptedChar = encrypted.charCodeAt(i);
                const originalChar = encryptedChar ^ keyByte;
                substituted += String.fromCharCode(originalChar);
            }
            let decrypted = "";
            for (let char of substituted) {
                decrypted += this.substitute(char, false);
            }
            const calculatedChecksum = this.calculateChecksum(decrypted);
            if (calculatedChecksum !== receivedChecksum) {
                return "Error: Checksum mismatch - wrong password or corrupted data";
            }
            return decrypted;
        } catch (error) {
            return `Decryption error: ${error.message}`;
        }
    }
}

// New class to handle the UI and application flow
class CipherApp {
    constructor() {
        // Cache all necessary DOM elements
        this.passwordInput = document.getElementById('password');
        this.plaintextInput = document.getElementById('plaintext');
        this.ciphertextInput = document.getElementById('ciphertext');
        this.initResult = document.getElementById('initResult');
        this.encryptResult = document.getElementById('encryptResult');
        this.decryptResult = document.getElementById('decryptResult');
        this.testResult = document.getElementById('testResult');

        // State
        this.cipher = null;

        // Bind event listeners
        document.getElementById('initializeBtn').addEventListener('click', () => this.initializeCipher());
        document.getElementById('encryptBtn').addEventListener('click', () => this.encryptData());
        document.getElementById('decryptBtn').addEventListener('click', () => this.decryptData());
        document.getElementById('runDemoBtn').addEventListener('click', () => this.runDemo());
        document.getElementById('runTestsBtn').addEventListener('click', () => this.runTests());
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());
    }

    showResult(element, message, isError = false) {
        element.innerHTML = message;
        element.className = 'result ' + (isError ? 'error' : '');
        element.style.display = 'block';
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    initializeCipher() {
        const password = this.passwordInput.value;
        if (!password) {
            this.showResult(this.initResult, 'Please enter a password!', true);
            return;
        }
        this.cipher = new SimpleCipher(password);
        this.showResult(this.initResult, '✅ Cipher initialized successfully with password!');
    }

    encryptData() {
        if (!this.cipher) {
            this.showResult(this.encryptResult, 'Please initialize cipher first!', true);
            return;
        }
        const plaintext = this.plaintextInput.value;
        if (!plaintext.trim()) {
            this.showResult(this.encryptResult, 'Please enter text to encrypt!', true);
            return;
        }

        const encrypted = this.cipher.encrypt(plaintext);

        if (encrypted.startsWith('Encryption error:')) {
            this.showResult(this.encryptResult, encrypted, true);
        } else {
            this.showResult(
                this.encryptResult,
                `<strong>🔒 Encryption Successful!</strong><br><br>
                 <strong>Original Text:</strong>
                 <div class="output-box" style="background: rgba(255,255,255,0.8);">${plaintext}</div>
                 <strong>Encrypted Text:</strong>
                 <div class="output-box" style="font-family: monospace; font-size: 14px;">${encrypted}</div>
                 <em style="color: #4ecdc4;">✅ Encrypted text has been copied to the decryption field!</em>`
            );
            this.ciphertextInput.value = encrypted;
        }
    }

    decryptData() {
        if (!this.cipher) {
            this.showResult(this.decryptResult, 'Please initialize cipher first!', true);
            return;
        }
        const ciphertext = this.ciphertextInput.value.trim();
        if (!ciphertext) {
            this.showResult(this.decryptResult, 'Please enter encrypted text!', true);
            return;
        }

        const decrypted = this.cipher.decrypt(ciphertext);

        if (decrypted.startsWith('Error:') || decrypted.startsWith('Decryption error:')) {
            this.showResult(this.decryptResult, `❌ ${decrypted}`, true);
        } else {
            this.showResult(
                this.decryptResult,
                `<strong>🔓 Decryption Successful!</strong><br><br>
                 <strong>Encrypted Text:</strong>
                 <div class="output-box" style="font-family: monospace; font-size: 12px; max-height: 80px; overflow-y: auto;">${ciphertext}</div>
                 <strong>Decrypted Text:</strong>
                 <div class="output-box" style="background: rgba(78, 205, 196, 0.3); font-size: 18px; color: #2c3e50;">${decrypted}</div>`
            );
        }
    }

    runDemo() {
        this.passwordInput.value = 'demo123';
        this.plaintextInput.value = 'Hello! This is a secret message for the demo. 🔐';
        this.initializeCipher();
        setTimeout(() => {
            this.encryptData();
            this.showResult(
                this.testResult,
                '🎉 Demo completed! The text was encrypted and is ready for decryption. Click "Decrypt" to see the original text!',
                false
            );
        }, 500);
    }

    runTests() {
        const testPassword = 'test123';
        const testCipher = new SimpleCipher(testPassword);
        const tests = [
            'Hello World!',
            'Test with numbers: 12345 and symbols @#$%',
            '🔐 Unicode test with emoji 🚀',
            'A'.repeat(100),
            'Short',
            ''
        ];

        let results = '<strong>🧪 Algorithm Test Results:</strong><br><br>';
        let allPassed = true;

        for (let i = 0; i < tests.length; i++) {
            const original = tests[i];
            const encrypted = testCipher.encrypt(original);
            const decrypted = testCipher.decrypt(encrypted);
            const passed = decrypted === original;

            if (passed) {
                results += `✅ Test ${i + 1}: PASSED - "${original.substring(0, 30)}${original.length > 30 ? '...' : ''}"<br>`;
            } else {
                results += `❌ Test ${i + 1}: FAILED<br>`;
                results += `&nbsp;&nbsp;Original: "${original}"<br>`;
                results += `&nbsp;&nbsp;Decrypted: "${decrypted}"<br>`;
                allPassed = false;
            }
        }

        results += '<br>' + (allPassed ?
            '🎉 All tests passed! The algorithm is working correctly.' :
            '⚠️ Some tests failed. Algorithm needs debugging.');

        this.showResult(this.testResult, results, !allPassed);
    }

    clearAll() {
        this.passwordInput.value = '';
        this.plaintextInput.value = '';
        this.ciphertextInput.value = '';
        [this.initResult, this.encryptResult, this.decryptResult, this.testResult].forEach(el => {
            el.style.display = 'none';
        });
        this.cipher = null;
    }
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CipherApp();