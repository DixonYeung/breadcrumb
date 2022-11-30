import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BsFillFileEarmarkTextFill as FileIcon } from "react-icons/bs";
import { AiTwotoneFolderOpen as FolderIcon } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

class App extends React.Component {
  state = {
    display: {
      children: [{filename: '', type: ''}],
      type: '',
      content: ''
    },
    path: [''],
    displayAll: true,
  }

  async componentDidMount() {
    const res = await axios.get(window.location.pathname);
    console.log(res);
    const display = res.data;
    const path = window.location.pathname.replace('/path','').split('/')
    path.shift();
    this.setState({display}, ()=>{
      this.setState({path});
      if(!this.state.display.type){
        this.setState({displayAll: false});
      }
    });
  }

  generateHref = (el:string)=>{
    let clonedPath = JSON.parse(JSON.stringify(this.state.path));
    clonedPath.length = this.state.path.indexOf(el)+1;
    return clonedPath.join('/');
  }

  render() {
    return this.state.displayAll === true ? (
      <Fragment>
        <div className="breadcrumb">
        {
          this.state.path.map((el, i)=>(
            i < this.state.path.length - 1 ? 
            <Fragment><a href={`/path/${this.generateHref(el)}`}>{el}</a><MdOutlineKeyboardArrowRight/></Fragment>
            :
            null
          ))
        }
        {
          this.state.display.type === 'dir' ? 
          <a href={`/path/${this.generateHref(this.state.path[this.state.path.length - 1])}`}>{this.state.path[this.state.path.length - 1]}</a>
          :
          <span>{this.state.path[this.state.path.length - 1]}</span>
        }
        
        </div>
        <div className="App">
          {this.state.display.type && (<div>Content</div>)}
          {
            // if it is a folder, display clickable children
            this.state.display.type === 'dir' ? 
              this.state.display.children.map((el, i)=>(
                <div>{el.type === 'file' ? <FileIcon/> : <FolderIcon/>}<a href={`${window.location.pathname}/${el.filename}`}>{el.filename}</a></div>
            ))
            :
            // if it is not a folder, display it's content
            <div>{this.state.display.content}</div>
          }
        </div>
      </Fragment>
    ) : (
      <div>Route not found in server</div>
    )
  };
}

export default App;
