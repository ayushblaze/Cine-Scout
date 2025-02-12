# 🎬 Cine Scout: Advanced Movie Tracking Application

## Project Overview
Cine Scout is a sophisticated React-based movie exploration and tracking application designed to provide an intuitive and performant user experience.

## Key Technical Implementations

### Performance Optimization Techniques
- **Race Condition Prevention**
  - Implemented `AbortController` to cancel ongoing API requests
  - Ensures only the most recent search request is processed
  - Prevents unnecessary network load and potential data inconsistencies

- **Efficient Resource Management**
  - Strategic use of cleanup functions in React hooks
  - Prevents memory leaks by properly managing component lifecycles
  - Ensures optimal performance and resource utilization

### Advanced React Patterns
- Custom hook implementations
- Efficient state management
- Modular component architecture
### Custom React Hooks
- **`useLocalStorageState`**: 
  - Simplified localStorage state management
  - Automatically persists and retrieves state across browser sessions
  - Reduces boilerplate code for localStorage operations

- **`useKey`**: 
  - Centralized keyboard event handling
  - Enables easy global keyboard shortcut implementations
  - Supports case-insensitive key matching

### Keyboard Interactions
- **Escape Key Functionality**
  - Closes movie details modal instantly
  - Provides smooth, intuitive user navigation

- **Enhanced User Experience**
  - Keyboard-driven interactions improve accessibility
  - Reduces reliance on mouse or touch interactions

## Application Features

### 🔍 Movie Search
- Real-time movie search functionality
- Comprehensive movie information retrieval
- Instant results with minimal latency

### 📊 Movie Tracking
- Add movies to personal watched list
- Detailed movie statistics tracking
  - IMDb ratings
  - Personal user ratings
  - Watched movie count
  - Total runtime analysis

### 💾 Local Storage Persistence
- Seamless data persistence using browser's localStorage
- Automatically saves user's movie lists and preferences
- Enables offline access to tracked movies
- Enhances user experience by preserving application state between sessions

### 🧑 User Experience
- Responsive and intuitive interface
- Smooth navigation between movie lists
- Interactive movie details view

## 🛠 Technologies Utilized
- React
- JavaScript (ES6+)
- CSS
- Fetch API
- AbortController
- Custom React Hooks

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation Steps

1. Clone the Repository
```bash
git clone https://github.com/your-username/cine-scout.git
cd cine-scout
```

2. Install Dependencies
```bash
npm install
```

3. Configure OMDB API
Create a `.env` file in the project root with your OMDB API key:
```
REACT_APP_OMDB_API_KEY=your_omdb_api_key_here
```

⚠️ **API Key Configuration**:
- Obtain a free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
- Ensure the key is kept confidential
- Add `.env` to `.gitignore`

4. Start Development Server
```bash
npm start
```

## 🔒 Environment Variables
- `REACT_APP_OMDB_API_KEY`: Essential for movie data retrieval

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💡 Troubleshooting
- Verify OMDB API key validity
- Check internet connectivity
- Review browser console for error messages

## 🌐 Deployment

```bash
npm run build
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🎥 Screenshots

Coming soon!

## 🌟 Acknowledgements

- [React](https://reactjs.org/)
- [OMDb API](http://www.omdbapi.com/)
- [Create React App](https://create-react-app.dev/)

---

**Happy Movie Tracking! 🍿🎥**

---

**Made with ❤️ by ayushblaze**
