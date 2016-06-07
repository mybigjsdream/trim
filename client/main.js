/**
 * Created by dengjing on 16/6/7.
 */

import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import testModule from './modules/test';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(testModule);
app.init();
