export default interface IPlanet
{
    name: string | null,
	rotation_period: number | null,
	orbital_period: number | null,
	diameter: number | null,
	climate: string | null,
	gravity: string | null,
	terrain: string | null,
	surface_water: number | null,
	population: number | null,
	residents: Array<any> | null,
	films: Array<any> | null,
	created:  string | null,
	edited:  string | null,
	url:  string | null
}