import { readable } from 'svelte/store';

export interface IMenuItem {
	title: string;
	link: string;
}

export const menu = readable(null, (set) => {
	const menuEntries: IMenuItem[] = [
		{
			title: 'Home',
			link: '#'
		},
		{
			title: 'Archivo',
			link: '#'
		},
		{
			title: 'Categorías',
			link: '#'
		},
		{
			title: 'Etiquetas',
			link: '#'
		},
		{
			title: 'Sobre mí',
			link: '#'
		}
	];

	set(menuEntries);

	return null;
});
