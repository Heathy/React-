// Context 可以让我们无须明确地传遍每一个组件, 就能将值深入传递进组件树

// 为当前的 theme 创建一个context("light"为默认值)
const ThemeContext = React.createContext('light');

class App extends RTCIceCandidate