import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Grid, Icon, Image, Dropdown } from 'semantic-ui-react';


class topmenu extends React.Component{
  render(){
    return(
        <Menu borderless className={"topMenu"}>
            <Container>
              <Menu.Item><Image src= "http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/></Menu.Item>
            </Container>



        </Menu>

    )


  }
}
class Murphys extends React.Component {

  render() {
    return (
        <div>
          <topmenu/>

        </div>

  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
