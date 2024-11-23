const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			planetas:[],
			pelis:[],
			naves:[],
			vehiculos:[],
			especies:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({"personajes" : data.results}))
			},
			
			getPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({"planetas" : data.results}))
			},

			getPelis: () => {
				fetch("https://www.swapi.tech/api/films")
					.then(res => res.json())
					.then(data => setStore({"pelis" : data.result}))
			},

			getNaves: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(res => res.json())
					.then(data => setStore({"naves" : data.results}))
			},

			getVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({"vehiculos" : data.results}))
			},

			getEspecies: () => {
				fetch("https://www.swapi.tech/api/species")
					.then(res => res.json())
					.then(data => setStore({"especies" : data.results}))
			}


			//https://starwars-visualguide.com/assets/img/people/${elem.uid}.jpg
		}
	};
};

export default getState;
