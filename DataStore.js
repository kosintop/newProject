import {observable} from 'mobx'

class DataStore{
    @observable globalString = 'initial string'
}

const dataStore = new DataStore()

export default dataStore