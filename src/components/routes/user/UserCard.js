import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserComponent = ({users}) => (
  <Card size="huge">
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{users[0].firstName}</Card.Header>
      <Card.Meta>
        <span className='date'>{users[0].email}</span>
      </Card.Meta>
      <Card.Description>
        {users[0].firstName} is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default UserComponent;