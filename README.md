
# Catppuccin Roact

Roact hooks and context to use with the catppuccin theme.
## Usage/Examples

``` tsx
import Roact from "@rbxts/roact";
import { useTheme } from "path-to/ThemeContext";

export default function Example() {
	const theme = useTheme();
	return <frame BackgroundColor3={theme.Theme.Base} Size={UDim2.fromScale(1, 1)} />;
}
```
