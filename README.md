# Binary Shift

A modern web application for easy translation between text and binary code. Convert any text to its binary representation and vice versa with a clean, responsive interface.

## Demo

Visit the live application: [Binary Shift](https://binaryshift.netlify.app)

## Features

- **Bidirectional Translation**: Convert text to binary and binary to text seamlessly
- **Real-time Conversion**: See changes instantly as you type
- **Keyboard Shortcuts**:
  - `Alt + Z`: Copy text content
  - `Alt + X`: Copy binary content
- **Mobile Responsive**: Works on all devices and screen sizes
- **Interactive Logo**: Toggles between text and binary representation on hover/click
- **Binary Validation**: Automatically filters non-binary characters (only allows 0, 1, and spaces)
- **Binary Formatting**: Automatically spaces binary into 8-bit chunks for readability
- **Offline Capability**: Can be configured to work offline via service workers

## Tech Stack

- **React** - UI library
- **Redux** - State management with Redux Toolkit
- **TailwindCSS** - Utility-first CSS framework

## Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/binary-shift.git
   cd binary-shift
   ```

2. Install dependencies

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

3. Start the development server
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

## How It Works

Binary Shift uses a straightforward encoding/decoding process:

1. **Text to Binary**:

   - Each character is converted to its ASCII/Unicode code point
   - The code point is then converted to binary
   - Each binary value is padded to ensure 8 bits (1 byte)
   - The bytes are separated with spaces for better readability

2. **Binary to Text**:
   - The binary input is split by spaces into 8-bit chunks
   - Each chunk is parsed from binary to decimal
   - The decimal value is converted back to its corresponding character

The application maintains the current state of both text and binary representations in a Redux store, ensuring that both fields stay in sync as the user makes changes.

## Project Structure

```
binary-shift/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── shifter/         # Core translation logic
│   │   ├── shifterSlice.js  # Redux state management
│   │   ├── Form.js          # Main form container
│   │   ├── TextField.js     # Text input component
│   │   └── BinaryField.js   # Binary input component
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── store.js        # Redux store configuration
└── package.json        # Project dependencies and scripts
```

## Customization

The application uses Tailwind CSS for styling, which can be customized in the `tailwind.config.js` file. The color scheme, fonts, and other design elements can be modified to suit your preferences.

## License

MIT

## Author

Created by [Isaac](https://isaacmuniz.vercel.app)

---

Feel free to contribute to this project by submitting issues or pull requests!
