export default function (plop) {
    plop.setGenerator('basics', {
        description: 'Create a new component folder',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.spec.tsx',
                templateFile: 'templates/test.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/stories.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs',
            },
        ],
    });
}
