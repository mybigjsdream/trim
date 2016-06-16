import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import testModule from './modules/test';
import coreModule from './modules/core';
import antModule from './modules/ant';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(testModule);
app.loadModule(coreModule);
app.loadModule(antModule);
app.init();
