import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 700,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function CharactersGridList(props) {
  const classes = useStyles();
  const { characters, cols } = props;
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={cols || 3}>
        {characters.map((character) => (
          <GridListTile key={character.id} cols={character.cols || 1}>
            <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} />
            <GridListTileBar
              title={character.name}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
