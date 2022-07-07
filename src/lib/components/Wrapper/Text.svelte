<!-- @component
  Displays the text preformatted
  
  **text**
  * string
  * default: Hello World
  * the text to display

  **size**
  * string: 'small' | 'medium' | 'large'
  * default: 'medium'
  * the size in wich the text should be displayed
  
  **textcolor**
  * string: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info' | 'surface' | 'text' | 'black'
  * default 'black'
  * the color in wich the text should be displayed
  
  **effect**
  * Array< 'underline' | 'bold' | 'italic' | 'strikethrough' >
  * default ['bold']
  * any effect the text should have
-->
<script lang="ts">
  export let text = 'Hello World';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let textcolor:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'surface'
    | 'text'
    | 'black' = 'black';
  export let effect: Array<'underline' | 'bold' | 'italic' | 'strikethrough'> =
    ['bold'];
</script>

<p
  class="text-text font-bold"
  class:text-sm={size === 'small'}
  class:text-xl={size === 'medium'}
  class:text-4xl={size === 'large'}
  class:italic={effect.includes('italic')}
  class:underline={effect.includes('underline')}
  class:line-through={effect.includes('strikethrough')}
  class:font-bold={effect.includes('bold')}
  class:text-text={textcolor === 'text'}
  class:text-error={textcolor === 'error'}
  class:text-success={textcolor === 'success'}
  class:text-warning={textcolor === 'warning'}
  class:text-info={textcolor === 'info'}
  class:text-primary={textcolor === 'primary'}
  class:text-secondary={textcolor === 'secondary'}
  class:text-accent={textcolor === 'accent'}
  class:text-surface={textcolor === 'surface'}
  class:text-black={textcolor === 'black'}
>
  {text}
</p>
