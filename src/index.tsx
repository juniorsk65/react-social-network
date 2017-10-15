// Import external components refrence
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { Provider } from 'react-redux'
import store, { history } from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'

// - Import app components
import Master from './components/Master'

// - Impport actions

// Set default data
store.subscribe(() => {
})

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
// const muiTheme = getMuiTheme({


// })



// App css
import './styles/app.scss';
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<Master />
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
)
