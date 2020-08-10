import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

/*  Area de comentários!

    react-native-gesture-handler:
      Estamos utilizando a biblioteca react-native-gesture-handler para pegar o RectButton
      que nada mais é do que um botão retangular com uma certa estilização.
      No caso do Android, aonde você pressionar, vai dar um clique parecendo um expand, o que é bem bonito.

    @react-navigation/native:
      Estamos utilizando o react navigation para a navegação na aplicação, é bem parecido com o useHistory.
      No caso, você chama a função navigate e passa como parametro o nome do component que declaramos la no
      AppStack.tsx.
      Facilita bastante a navegação.

    style={[styles.button, styles.buttonPrimary]}:
      O que foi feito aqui é a "importação" de 2 estilos para o mesmo objeto, para isso utilizamos
      os [], assim você declara os styles que deseja usar.

*/

function Landing() {

    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                  style={[styles.button, styles.buttonPrimary]} 
                  onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                  style={[styles.button, styles.buttonSecondary]} 
                  onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;