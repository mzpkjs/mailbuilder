# Option 1 - Ol'skool
In this solution we generate JSON configuration for an email on the front-end 
but the `partners-api` would build HTML for it.

PROS:  
- No intermediate communication layer. Simple architecture.
- More of an ol' school way, fewer surprises I guess.

CONS:  
- Duplication some of builder's bits of code (types, node traversal).
- Takes a sizeable chomp of back-end devs capacity.



# Option 2 - Node.js as Middleman
In this solution we generate JSON configuration for an email on the front-end 
then proceed with building HTML for it in a new Node.js application.

PROS:  
- A bit easier to upkeep as we keep everything in a single place (HTML could be built with React.js + jsdom).
- Possible reuse of builder's bits of code (types, node traversal).
- We can release it without worrying about mobile release cycles.

CONS:  
- This needs intermediate communication layer.
- Such setup may come with a headache.



# Option 3 - Hefty Front-End
In this solution we generate JSON configuration and raw HTML for an email on the front-end.

PROS:  
- A bit easier to upkeep as we keep everything in a single place (HTML could be built with React.js + jsdom).
- Possible reuse of builder's bits of code (types, node traversal).
- No intermediate communication layer. Simple architecture.

CONS:  
- Just forwarding built HTML between layers may seem to be a bit odd. Is it?