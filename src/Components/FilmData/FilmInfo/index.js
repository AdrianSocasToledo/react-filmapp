import React from 'react'
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
 
import './FilmInfo.css'

const FilmInfo = ({film}) => {
    return <div className="filmInfo">
        <div>
            <Icon icon={IconNames.SEARCH_TEXT} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
            <span>{film.Title}</span>
        </div>
        <div>
            <Icon icon={IconNames.CALENDAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
            <span>{film.Year}</span>
        </div>
        <div>
            <Icon icon={IconNames.PERSON} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.Director}</span>
        </div>
        <div>
            <Icon icon={IconNames.FLAG} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.Country}</span>
        </div>
        <div>
            <Icon icon={IconNames.TIME} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.Runtime}</span>
        </div>
        <div>
            <Icon icon={IconNames.COMPARISON} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.Genre}</span>
        </div>
        <div>
            <Icon icon={IconNames.COMMENT} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.Plot}</span>
        </div>
        <div>
            <Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}/>
             <span>{film.imdbRating}</span>
        </div>

    
    </div>
}

export default FilmInfo