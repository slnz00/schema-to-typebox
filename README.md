# schema-to-typebox

### How to use?
1. Install dependencies: `npm run install`
2. Copy the JSON schema* you want to convert and paste it into the `schema` variable in `index.ts`.
3. Run `npm start`
4. An `output.ts` file will be generated with the converted TypeBox definition.

*This script only supports plain JSON schema objects. If your schema contains references to other schemas, remove them first and resolve them manually after conversion.
