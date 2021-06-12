import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import LevelSelect from './components/LevelSelect'
import LeaderBoard from './components/LeaderBoard' 
import Level1Main from './components/Level1Main'
import Level1Right from './components/Level1Right'
import Level1Left from './components/Level1Left'
import Level2Main from './components/Level2Main'
import Level2Right from './components/Level2Right'
import Level2Left from './components/Level2Left'
import LeverOff from './components/LeverOff'
import LeverOn from './components/LeverOn'
import Chest from './components/Chest'
import Key from './components/Key'
import NoKey from './components/NoKey'
import Success from './components/Success'
import Comment from './components/Comment'

export default (
    <Switch>
        <Route exact path = '/' component = {Dashboard}/>
        <Route path = '/Auth' component = {Auth}/>
        <Route path = '/LevelSelect' component = {LevelSelect}/>
        <Route path = '/LeaderBoard' component = {LeaderBoard}/>
        <Route path = '/Level1Main' component = {Level1Main}/>
        <Route path = '/Level1Right' component = {Level1Right}/>
        <Route path = '/Level1Left' component = {Level1Left}/>
        <Route path = '/Level2Main' component = {Level2Main}/>
        <Route path = '/Level2Right' component = {Level2Right}/>
        <Route path = '/Level2Left' component = {Level2Left}/>
        <Route path = '/LeverOff' component = {LeverOff}/>
        <Route path = '/LeverOn' component = {LeverOn}/>
        <Route path = '/Chest' component = {Chest}/>
        <Route path = '/Key' component = {Key}/>
        <Route path = '/NoKey' component = {NoKey}/>
        <Route path = '/Success' component = {Success}/>
        <Route path = '/Comment' component = {Comment}/>
    </Switch>
)