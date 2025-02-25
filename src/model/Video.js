import Image from './Image';

export default class Video extends Image {
  constructor(data = {}) {
    super(data);
    this.thumbnail = new Image(data.thumbnail);
  }
}
