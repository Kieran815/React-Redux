import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>Are You Sure</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kieran"
          timeAgo="Today @ 9:15am"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Lexx"
          timeAgo="Today @ 11:05am"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Navi"
          timeAgo="Today @ 12:25am"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));

