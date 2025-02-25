export default class Image {
  constructor(data = {}) {
    this.title = data?.title;
    this.url = data?.url;
    this.altText = data?.altText;
    this.metaDescription = data?.metaDescription;
    this.isPrimary = data?.isPrimary;
    this.position = data?.position;
    this.file = null;
  }
}
