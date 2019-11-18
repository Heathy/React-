import React from 'react';
import { Icon, Comment, Avatar, Form, Button, List, Input,  } from 'antd';
import moment from 'moment';
const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

export default class Technology extends React.Component {
    state = {
    comments: [],
    submitting: false,
    value: '',
  };
   handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });
     setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'http://t1.hxzdhn.com/uploads/tu/201911/10028/4ae355e8df_33.jpg',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };
   handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
    render() {
        const { comments, submitting, value } = this.state;
        return (
            <>
                <div id="header" style={{
                        minHeight: '45px'
                    }}>
                    <span style={{
                        lineHeight: '45px',
                        fontSize:'14px',
                        color: 'orange',
                        marginLeft: '15px',
                        marginRight: '8px',
                    }}>学员后台</span>
                    <Icon type="right" />
                    <span style={{
                        lineHeight: '45px',
                        fontSize:'14px',
                        marginLeft: '10px',
                    }}>VIP</span>
                </div>
                <div style={{
                    marginTop: '22px',
                }}>学员评论</div>
                <div>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                    avatar={
                        <Avatar
                        src="http://t1.hxzdhn.com/uploads/tu/201911/10028/4ae355e8df_33.jpg"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        value={value}
                        />
                    }
                    />
                </div>
            </>
        )
    }
}