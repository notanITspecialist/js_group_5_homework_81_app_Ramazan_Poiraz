import React, {useState} from 'react';
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import {connect} from "react-redux";
import {shorted} from "./store";

function App(props) {
  const [url, setUrl] = useState({url: ''});

  const changeUrl = e => setUrl({url: e.target.value});

  const shortingLink = async e => {
      e.preventDefault();
      await props.shortLink(url)
  };

  return (
      <div className='text-center' >
          <h1>Shorted your link!</h1>
          <Form className='w-50 m-auto'  onSubmit={shortingLink}>
              <FormGroup>
                  <Input onChange={changeUrl} value={url.url} placeholder='Enter URL here' />
              </FormGroup>
              <FormGroup>
                  <Button>Shorted</Button>
              </FormGroup>
          </Form>
          <a href={props.shortedLink}>{props.shortedLink}</a>
      </div>
  );
}

const mapStateToProps = state => ({
    shortedLink: state.shortLink.shortUrl
});

const mapDispatchToProps = dispatch => ({
    shortLink: url => dispatch(shorted(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
