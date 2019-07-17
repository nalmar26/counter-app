import ShallowRenderer from 'react-test-renderer/shallow'; 
import Image from './image';
import React from 'react';
import ReactDOM from 'react-dom';

test('First Test', ()=>{
    expect(true).toBeTruthy();
})
test('Test Image Renderer loaded successfully', ()=>{
    const testInput = {
        id:1, value : 0, imageURL:'https://picsum.photos/90', name:'firsttest'
    };

    const div = document.createElement('div');
    const renderer = ReactDOM.render(<Image counter={testInput} />,div);
    
});
test('Test Image Renderer', ()=>{
    const testInput = {
        id:1, value : 0, imageURL:'https://picsum.photos/90', name:'firsttest'
    };
    const renderer = new ShallowRenderer();
    renderer.render(<Image counter={testInput} />);
  const result = renderer.getRenderOutput();

expect(result.type).toBe('img');
expect(result.props.alt).toBe(testInput.name+testInput.id);

})