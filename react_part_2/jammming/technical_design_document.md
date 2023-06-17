# Design Document
**May 21st 2023**

## OBJECTIVE
_A brief description of the overall goal of this feature request, summed up in one to two sentences._

Ability to export a playlist as an JSON document.

## BACKGROUND 
_A more thorough explanation of why this feature is important to implement and all of the essential functionality of the feature. This section could contain research findings, user stories, examples of similar features, or anything else that explains why this feature has been prioritized and why the technical design laid out below implements the pieces of functionality that it does._

This feature will allow users to download and save their playlists for future use and to share with others in an easily consumable and commonly used format.

## TECHNICAL DESIGN
_This section should lay out all of the information needed to implement this feature. In the context of React, this could include new components and their functionality, existing component updates, how to address edge cases, and any other information an engineer would need before implementing this feature._
_For front-end changes, this section will often include design mocks or wireframes to specify how the design of the application needs to be updated._

The users will have a additional button at the bottom of their playlist which allows them to download their list anytime before selecting the "Done" button.

## CAVEATS
_This section is used to lay out alternative solutions and their respective drawbacks, as well as potential drawbacks to the proposed solution above. This is used to make it clear why the technical implementation detailed previously was chosen instead of alternatives. It additionally allows stakeholders or other developers to consider those drawbacks and choose one of the alternate solutions if they prefer it. This may occur if they feel the benefits or drawbacks of that solution are more desirable than the current solution, or if they can identify other benefits and drawbacks not currently listed._

Note, becasue the "Done" button clears the content of a playlist, a user must download prior to clicking it, or they will lose their playlist.
