# Custom Shortcodes

## `image`

An image shortcode for applying a theme-specific border to an image.

### Usage 

```
{{< image src="/example-image.webp" alt="Example Image" height="450" width="301" >}}
```

### Attributes

| Name    | Description | Required? | Example |
| ------- | ----------- | --------- | ------- |
| src     | Relative path to image | true | "/example-image.webp" |
| alt     | Specifies an alternate text for an image, if the image cannot be displayed. | true | "Picture of cat" | 
| height  | | true  | 300 |
| width   | | true  | 500 |
| caption | | false | "My cat" |
