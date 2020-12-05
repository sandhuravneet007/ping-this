import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%"
    },
}));

const ImageGridList = ({ tileData }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={9}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.cols || 3}>
                        <img src={tile.download_url} alt={tile.author} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ImageGridList;