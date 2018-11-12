## Messing with React

A quick and dirty look at React and how it all connects together.

I am intentionally not using Redux as an exercise in routing and state.

### Services

React as a concept is simply a library as opposed to a framework and thus you must add in the right bits here and there to ensure that it is suitable for each use case.

I have come from an AngularJS background which is very much driven by components and serviecs. I struggled with React as there are no obvious service concepts which are reusable.

I think this is an appropriate use for HOC although most developers would probably put API logic in Redux.

I created a service file that simply exported each function. This is very angular style but works really well. React doesn't force you into any set ways of working and this worked for me.

### React concepts

I love the lightweight approach to React. It is simple and uses more 'raw' JavaScript techniques as opposed to Angular which forces you down a certain path.
