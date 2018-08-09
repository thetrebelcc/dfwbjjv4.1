import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.americangrapplingfederation.com/wp-content/uploads/2014/12/2017DallasSummerClassic.jpg) center / cover'}} >AGF  Dallas Summer Classic</CardTitle>
            <CardText>
              
            </CardText>
            <CardActions border>
              <a href="https://www.americangrapplingfederation.com/"><Button colored>Register</Button> </a>
              <a href="https://www.americangrapplingfederation.com/"><Button colored>More about this event</Button> </a>
            
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/png;base64,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'}} >Grappling Industries</CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <a href="http://grapplingindustries.com/"><Button colored>Register</Button> </a>
              <a href="http://grapplingindustries.com/"><Button colored>More about this event</Button> </a>
              <a href="http://grapplingindustries.com/"><Button colored>Must register before August 4th!</Button> </a>

              
        </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.nagafighter.com/images/texas10-18_small.jpg' }} >NAGA  Saturday (10/13/18)

 </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <a href="http://nagafighter.com/index.php?module=eventinformationpage/655"><Button colored>Register</Button> </a>
              <a href="http://nagafighter.com/index.php?module=eventinformationpage/655"><Button colored>More about this event</Button> </a>
              <a href="http://nagafighter.com/index.php?module=eventinformationpage/655"><Button colored>Must register by October 15th!</Button></a>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>The DFW BJJ Tournament Scene HUb</Tab>
      
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
