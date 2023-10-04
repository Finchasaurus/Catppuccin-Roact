import Roact from "@rbxts/roact";
import { useTheme } from "../src/ThemeContext";

export default function Example() {
	const theme = useTheme();
	return <frame BackgroundColor3={theme.Theme.Base} Size={UDim2.fromScale(1, 1)} />;
}
