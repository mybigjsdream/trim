import MyAwesomeReactComponent from '../components/test';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    //const {Meteor} = context();

    //if (Meteor.subscribe('posts.single', postId).ready()) {
    //    const post = Collections.Posts.findOne(postId);
    //    onData(null, {post});
    //} else {
    //    const post = Collections.Posts.findOne(postId);
    //    if (post) {
    //        onData(null, {post});
    //    } else {
    //        onData();
    //    }
    //}
    onData();
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(MyAwesomeReactComponent);