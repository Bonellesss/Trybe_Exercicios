    function sum() {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        const result = parseInt(value1) + parseInt(value2);
        try {
            isComplet(value1, value2);
            document.getElementById('result').innerHTML = `Resultado: ${result}`;
        } catch (error) {
            document.getElementById('result').innerHTML = `<span style="color: red;">${error.message}</span>`      
        } finally {
            document.getElementById('value1').value = '';
            document.getElementById('value2').value = '';
        }
    }

    const isComplet = (value1 ,value2) => {         
        if (value1 === '' || value2 === '') {
            throw new Error('Entrada incompleta! Adicione os dois valores antes de somar!')
        }
    }

    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
