let p = Promise.resolve();

p.then(() => {
    console.log("then1");
    Promise.resolve().then(() => {
        console.log("then1-1");
    });
}).then(() => {
    console.log("then1-2");
});

p.then(() => {
    console.log("then2");
});


// let p = Promise.resolve().then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//         console.log("then1-1");
//     });
// }).then(() => {
//     console.log("then2");
// });

// p.then(() => {
//     console.log("then3");
// });
