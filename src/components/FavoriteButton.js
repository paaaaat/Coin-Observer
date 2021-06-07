import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const FavoriteButton = ({ onClickHandler, favorite }) => {
  return (
    <IconButton size="small" onClick={onClickHandler}>
      {favorite
        ? <FavoriteIcon color='secondary' />
        :  <FavoriteBorderIcon />
      }
    </IconButton>
  );
}

export default FavoriteButton;
