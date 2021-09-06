import './index.css';
import {renderEntireTree} from "./render";
import state from "./redux/state";
import {addPost, changeText} from "./redux/state";
renderEntireTree(state, addPost, changeText);

