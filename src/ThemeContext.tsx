import { Frappe, Latte, Macchiato, Mocha } from "@rbxts/catppuccin";
import Roact, { PropsWithChildren } from "@rbxts/roact";
import { useContext, useMemo, useState } from "@rbxts/roact-hooked";

const Catppuccin = {
	Latte: Latte,
	Frappe: Frappe,
	Macchiato: Macchiato,
	Mocha: Mocha,
};

const ThemeContext = Roact.createContext({
	Theme: Catppuccin.Latte,
	SetTheme: (theme: keyof typeof Catppuccin) => {
		warn("ThemeContext.SetTheme is not defined");
	},
});

interface Props {
	defaultValue: keyof typeof Catppuccin;
	[Roact.Children]?: Roact.Element;
}

export default function ThemeProvider(props: PropsWithChildren<Props>) {
	const [theme, setTheme] = useState<keyof typeof Catppuccin>(props.defaultValue ?? "Latte");

	const value = useMemo(() => {
		return {
			Theme: Catppuccin[theme],
			SetTheme: setTheme,
		};
	}, [theme]);

	return <ThemeContext.Provider value={value}>{props[Roact.Children]}</ThemeContext.Provider>;
}

export function useTheme() {
	return useContext(ThemeContext);
}

export function withTheme<T extends {}>(Component: Roact.ComponentConstructor<T>) {
	return function (props: T) {
		return (
			<ThemeContext.Consumer
				render={(value) => {
					return <Component {...props} Theme={value.Theme} SetTheme={value.SetTheme} />;
				}}
			/>
		);
	};
}
