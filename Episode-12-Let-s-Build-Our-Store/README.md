
-> 
 <!-- 
    Vanialla(older) Redux => DON'T MUTATE STATE ,returning was mandatory
        const newState = [...state];
         newState.items.push(action.payload);
           return newState;
 -->




## https://github.com/pmndrs/zustand

=> Redux Toolkit uses immer behind the scene
 ## https://immerjs.github.io/immer/


# Redux Toolkit
    https://redux-toolkit.js.org/

   - Install @reduxjs/toolkit and react-redux.
   - Build our store.
   - Connect our store to our app.
   - Slice (cardSlice).
   - dispatch (action).
   - Selector.

## useContext vs Redux.
   useContext and Redux are both tools used in React applications for managing state, but they serve different purposes and have different use cases.

   useContext:
               -> useContext is a React Hook that allows components to subscribe to a    context created by React.createContext.
               -> Context provides a way to pass data through the component tree without having to pass props down manually at every level.
               -> It's particularly useful when some data needs to be accessible to many components at different nesting levels in the component tree.
               -> useContext is typically used for smaller, simpler applications or for cases where state management requirements are not complex

   Redux:
               -> Redux is a state management library commonly used with React (although it can be used with other frameworks as well).
               -> Redux provides a centralized store to manage the state of your entire application.
               -> It follows a strict unidirectional data flow pattern, which can help maintain consistency in large applications.
              ->  Redux provides actions, reducers, and a store. Actions are dispatched to update the state in the store through reducers.
              ->  Redux is particularly useful for large applications with complex state management needs, where different parts of the
                  application need to access and modify the same state.

   When to use which:
                 
   -> useContext is ideal for simpler scenarios where you need to pass data between components that are deeply nested, but the state management logic is not too complex.

   -> Redux is more suitable for larger applications where you need to manage complex state across multiple components, and when you want to have a clear and predictable state management pattern.




   In summary, useContext is more lightweight and suited for simpler scenarios, while Redux is more comprehensive and suited for larger, complex applications.
   However, the choice between them ultimately depends on the specific requirements and complexity of your application. 
    Additionally, you can even use them together in some cases, where useContext can be used to consume values from the Redux store within React components.

## Advantage of using Redux Toolkit over Redux.

   Redux Toolkit is a set of tools and utilities built to simplify the process of writing Redux code. It's designed to address some common pain points and boilerplate associated with using Redux directly. 
   Here are some advantages of using Redux Toolkit over traditional
   
   Redux:
   Boilerplate Reduction:
                Redux Toolkit significantly reduces the amount of boilerplate code required to set up a Redux store, define reducers, and write action creators. 
                It provides a set of APIs that abstract away much of the repetitive setup tasks, making Redux code more concise and easier to maintain.

   Simplified Immutable Update Logic:
                  With Redux Toolkit, you can write immutable update logic using createSlice or createReducer functions. 
                  These utilities handle immutability under the hood, making it easier to write reducers without having to manually 
                  handle immutable updates using libraries like immer.

   Encourages Best Practices: 
                  Redux Toolkit is designed with best practices in mind. It encourages the use of structured patterns like the 
                  "slice" pattern, which organizes reducers, action creators, and initial state together in a single file. This 
                  improves code organization and makes it easier to understand and maintain.

   Built-in Redux DevTools Configuration:
                 Redux Toolkit comes pre-configured with the Redux DevTools Extension, which provides powerful debugging capabilities. This allows you 
                 to inspect state changes, time-travel through actions, and debug your Redux code more effectively.

   Efficient Redux Store Configuration: 
                Redux Toolkit automatically sets up the Redux store with sensible defaults, including middleware like Redux 
                Thunk for handling asynchronous actions. This eliminates the need for manual store configuration and reduces
                the cognitive load on developers.

   Integration with Modern JavaScript Features: 
                Redux Toolkit leverages modern JavaScript features like ES6 syntax and modules. It allows you to write more expressive 
                and concise code using features like arrow functions, destructuring, and default parameters.

   Officially Maintained by Redux Team:
                Redux Toolkit is an officially maintained package by the Redux team, which means it receives regular updates,
                bug fixes, and improvements. This ensures compatibility with the latest versions of Redux and React, as well as
                ongoing support and documentation.

## Explain Dispatcher.

   In the context of software development, particularly in frameworks like React or Flux, a dispatcher is a central hub responsible 
   for distributing actions to various parts of an application. It plays a crucial role in the unidirectional data flow architecture,
   ensuring that actions triggered by user interactions or other events are dispatched to appropriate stores or handlers for processing.

   Here's a breakdown of the key aspects of a dispatcher:

   Action Dispatching: 
                 The primary responsibility of a dispatcher is to dispatch actions. Actions are plain JavaScript objects that contain information
                 about an event that occurred in the application. These events could be user interactions, API responses, timers, or any other source
                 of data change.

   Centralized Hub:
                  The dispatcher serves as a centralized hub or message bus in the application. All actions flow through the dispatcher, regardless of 
                  where they originate. This centralization ensures a predictable flow of data and helps maintain the integrity of the application's state.

   Decoupling Components:
                By using a dispatcher, components in the application can remain decoupled from each other. Components only need to dispatch actions,
                without needing to know how those actions will be handled or which other components might be affected.

   Action Handlers:
                Alongside the dispatcher, there are typically action handlers or stores that register with the dispatcher to receive specific types of actions.
                When an action is dispatched, the dispatcher forwards it to the appropriate action handler(s) based on the action's type or other criteria.

   Ordering and Prioritization:
                Dispatchers may also handle ordering and prioritization of actions. For example, they might ensure that certain types of actions are processed before others,
                or they might queue actions during periods of high load to prevent overwhelming the system.

   Error Handling: 
                Dispatchers may include error handling mechanisms to deal with failed actions or unexpected conditions. They might log errors, retry failed actions, or 
                take other appropriate actions to maintain the stability of the application.

   Single Source of Truth:
                The dispatcher contributes to the principle of having a single source of truth for the application's state. By ensuring that all state changes flow through a 
                central dispatcher, the application can maintain consistency and avoid data conflicts.


## Explain Reducer.

   In the context of state management libraries like Redux, a reducer is a pure function responsible for specifying how the application's state changes in response to
   dispatched actions. Reducers play a central role in the Flux architecture and its implementations, including Redux. They take the current state and an action as arguments, 
   and return the new state based on that action.

Here are the key aspects of reducers:

   Pure Functions:
                Reducers are pure functions, meaning they produce the same output for the same input and have no side effects.
                They don't modify the state directly; instead, they return a new state object representing the updated application state.

   State Mutation:
               Reducers specify how the application state should change in response to different types of actions. They typically use a switch statement
               or similar mechanism to determine how to handle each action type.

   Current State:
                Reducers receive the current state of the application as their first argument. This state represents the state tree of the application 
                at the time the action was dispatched.

   Action:
               Reducers receive the action dispatched by components or other parts of the application as their second argument. Actions are plain JavaScript objects
               that describe what happened in the application, typically including a type property indicating the action type and optionally payload data.

   Returning New State:
               Reducers return a new state object based on the current state and the action received. They should not modify the existing state directly; 
               instead, they should produce a new state object reflecting the desired changes.

   Handling Multiple Actions:
               Reducers often use a switch statement or similar control flow mechanism to handle different action types. Each case in the switch statement
               specifies how the state should change in response to a particular action type.

   Combining Reducers:
               In larger applications, reducers are often split into smaller, more manageable pieces called "slice reducers.
               " These slice reducers handle specific portions of the application state and are combined into a single root reducer using helper
               functions like combineReducers provided by Redux.


## Explain slice.

   In the context of Redux, a "slice" refers to a portion of the application state and its related logic managed by a Redux reducer. 
   Slices are typically used to organize the Redux store into smaller, more manageable pieces, each responsible for handling a specific 
   domain of the application state.

 Here are the key aspects of a Redux slice:

   State Shape:
               A slice defines a specific portion of the application state. This portion of the state is typically represented as an object 
               with various properties corresponding to different aspects of that domain.

   Reducer:
                 Each slice has its own reducer function responsible for handling actions related to
                 that specific portion of the state. The reducer specifies how the slice's state should change in response to dispatched actions.

   Actions: 
                Actions specific to the slice are typically defined and dispatched to modify the slice's state.
                These actions are plain JavaScript objects with a type property indicating the action type and optionally a payload 
                property containing additional data.

   Selectors:
               Selectors are functions used to extract specific pieces of state from the Redux store. Slices often include selector 
               functions tailored to their specific state shape, making it easier to access and use slice-specific data in components.

   Initialization: 
               Slices may include initial state values and action creators to initialize their state or perform other initialization 
               tasks when the application starts.

   Combining Slices: 
                In larger applications, multiple slices are typically combined into a single root reducer using the combineReducers
                utility provided by Redux. This root reducer is then used to create the Redux store, allowing each slice to handle a specific
                portion of the application state while still being part of the overall state tree.
                
      
   
## Explain selector.

 In the context of Redux or other state management libraries, a "selector" refers to a function that retrieves specific pieces
 of data from the application state. Selectors are used to access and transform state data in a predictable and efficient manner, 
 typically within React components or other parts of the application logic.

   Here are the key aspects of selectors:

  Accessing State: 
                Selectors provide a way to access the application state stored in the Redux store or other state management systems.
                They abstract away the details of how the state is structured and how it's stored, allowing components and other parts 
                of the application to access state data in a consistent way.

   Derived Data:
                Selectors can compute derived data from the state. They can perform transformations, calculations, or filtering on the state 
                data to derive new values that are useful for rendering components or performing other application logic.

  Memoization: 
               Selectors often utilize memoization techniques to optimize performance. Memoization ensures that the selector function returns
               the same result for the same input arguments, allowing it to avoid redundant computations when the input data hasn't changed.

  Encapsulation: 
               Selectors encapsulate knowledge of the state shape and structure within the application. They provide a clear interface for accessing
               specific pieces of state data, shielding the rest of the application from changes to the state structure.

   Composability: 
               Selectors can be composed together to build more complex selectors. By combining simpler selectors into larger ones, 
               developers can create selectors that retrieve multiple pieces of data or perform multiple transformations in a single operation.

   Reusability: 
               Selectors promote code reuse by encapsulating common data access patterns. Once defined, selectors can be reused across multiple 
               components or parts of the application, reducing duplication and promoting consistency.

  Testing: 
               Selectors are easy to test in isolation. Since they are pure functions that operate on input data,
               they can be unit tested without the need for complex setup or mocking of external dependencies.


## Explain createSlice and the configuration it takes.

   createSlice is a utility function provided by Redux Toolkit for creating Redux slice reducers with minimal boilerplate.
   It encapsulates the logic for defining action types, action creators, and the reducer function itself within a single, concise API.


        import { createSlice } from '@reduxjs/toolkit';

                const sliceName = 'counter';

                const initialState = {
                value: 0,
                };

                const counterSlice = createSlice({
                name: sliceName,
                initialState,
                reducers: {
                    increment: state => {
                    state.value += 1;
                    },
                    decrement: state => {
                    state.value -= 1;
                    },
                    incrementByAmount: (state, action) => {
                    state.value += action.payload;
                    },
                },
                });

                export const { increment, decrement, incrementByAmount } = counterSlice.actions;
                export default counterSlice.reducer;



   name: 
         This is a string value representing the name of the slice. It is used to generate action type strings based on the slice's action names.

 initialState:
           This is the initial state value for the slice. It's an object containing the initial state properties.

   reducers:
   
  -> This is an object where each key represents an action type, and the corresponding value is a reducer function. 
   Each reducer function receives the current state and the action payload as arguments and returns the new state.
   
  -> The key is the name of the action, and the value is the reducer function. These action names are automatically used to generate action types.

  -> The reducer function receives the current state as the first argument and the action object (including the payload) as the second argument.

  -> Inside the reducer function, you directly mutate the state object. This is possible because Redux Toolkit internally uses the Immer library, which allows you to write "mutating" logic that is turned into safe immutable updates.

  -> extraReducers (optional): This is an object that allows you to define additional reducers outside of the slice. These reducers can respond to actions dispatched by other parts of the application.

 ->  Once you define a slice using createSlice, you can access its action creators and reducer function via the actions and reducer properties of the created slice. These can then be exported and used in your Redux store configuration.


## difference among {handleAddItem},{() => handleAddItem(item)} and {handleAddItem(item)}


   ->  {handleAddItem}:
                    This syntax represents a reference to the handleAddItem function itself. It does not invoke the function immediately.
                    It's typically used when passing a function as a prop to a child component or when defining event handlers in JSX.
                    For example, <button onClick={handleAddItem}>Add Item</button> would call the handleAddItem function when the button is clicked.

   ->  {() => handleAddItem(item)}:
                    This syntax defines an inline arrow function that, when invoked, will call the handleAddItem function with the item argument.
                    It's commonly used when you need to pass arguments to the function or when you want to trigger a function call based on an event or condition.
                    For instance, <button onClick={() => handleAddItem(item)}>Add Item</button> would call the handleAddItem function with the item argument when the button is clicked.

   -> {handleAddItem(item)}:
                    This syntax directly invokes the handleAddItem function with the item argument immediately when the component re-renders.
                    It's typically not used directly in JSX because it would cause the function to be called immediately on every render, rather than in response to an event or condition.
                    However, it might be used in situations where you want to invoke a function during the rendering phase (though this is rare in React), such as during initialization or side-effect setup outside of JSX.
