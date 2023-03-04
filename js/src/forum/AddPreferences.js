import { extend, override } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import SettingsPage from 'flarum/common/components/SettingsPage';
import Switch from 'flarum/common/components/Switch';
import ItemList from 'flarum/common/utils/ItemList';

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add(
            'disabler-auto-fresh',
            FieldSet.component(
                {
                    label: app.translator.trans('kyrne-websocket.forum.settings.heading'),
                    className: 'disable-auto-fresh',
                },
                this.disabledAutoFresh().toArray()
            )
        );
    });

    SettingsPage.prototype['disabledAutoFresh'] = function () {
        const items = new ItemList();
        items.add(
            'disable-auto-fresh',
            Switch.component(
                {
                    state: this.user.preferences().disableAutoFresh,
                    onchange: (value) => {
                        this.disableAutoFresh = value;
                        this.user.savePreferences({ disableAutoFresh: value }).then(() => {
                            m.redraw();
                        });
                    },
                },
                app.translator.trans('kyrne-websocket.forum.settings.label')
            )
        );
        return items;
    };
}