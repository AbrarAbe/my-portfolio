// Make Astro's JSX namespace available globally for .astro file type-checking
import 'astro/astro-jsx';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        type Element = astroHTML.JSX.Element;
        type Children = astroHTML.JSX.Children;
        type Child = astroHTML.JSX.Child;
        interface ElementChildrenAttribute extends astroHTML.JSX.ElementChildrenAttribute { }
        interface IntrinsicAttributes extends astroHTML.JSX.IntrinsicAttributes { }
        interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements { }
        interface ElementAttributesProperty { }
    }
}
