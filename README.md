# mongoose-9755
Additional information for issue #9755

npm run build will produce the following errors


src/models/user.model.ts:34:22 - error TS2488: Type 'Function' must have a '[Symbol.iterator]()' method that returns an iterator.

34   for (let subDoc of this.subDocs) {
                        ~~~~~~~~~~~~

src/models/user.model.ts:38:19 - error TS2488: Type 'Function' must have a '[Symbol.iterator]()' method that returns an iterator.

38   for (let str of this.strings) {
