// @flow
import * as React from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Mail from 'material-ui-icons/Mail'
import ListItemText from '~/components/List/ListItemText'

type Props = {
  address: string,
}

const Address = ({ address }: Props) => (
  <ListItem>
    <Avatar>
      <Mail />
    </Avatar>
    <ListItemText primary="Safe Address" secondary={address} cut />
  </ListItem>
)

export default Address
