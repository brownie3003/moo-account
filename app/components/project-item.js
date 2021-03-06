import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card', 'blue-grey', 'darken-1', 'project-item'],
    actions: {
        deleteProjectComponent() {
            const deleteProjectFunc = this.get('deleteProject');
            return deleteProjectFunc(this.get('project'));
        }
    }
});
