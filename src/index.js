import createStyles from 'draft-js-custom-styles';
import ColorPicker from './Picker';

const { styles, customStyleFn, exporter } = createStyles(['color'], 'CUSTOM_');

const addColor = (updateEditorState, getEditorState) => color => {
  return updateEditorState(styles.color.add(getEditorState(), color));
};

const removeColor = (updateEditorState, getEditorState) => () => {
  return updateEditorState(styles.color.remove(getEditorState()));
};

const currentColor = getEditorState => () => styles.color.current(getEditorState());

export const colorPickerPlugin = (updateEditorState, getEditorState) => ({
  addColor: addColor(updateEditorState, getEditorState),
  removeColor: removeColor(updateEditorState, getEditorState),
  currentColor: currentColor(getEditorState),
  customStyleFn,
  exporter,
});

export default ColorPicker;


