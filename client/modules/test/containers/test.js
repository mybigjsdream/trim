import Test from '../components/test';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    onData();
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Test);