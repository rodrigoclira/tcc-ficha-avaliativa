import React, { useEffect } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
} from '@coreui/react'
import { useState } from 'react';

const Home = () => {
    const [reviewer, setReviewer] = useState("");
    const [comment, setComment] = useState("");
    const [student, setStudent] = useState("");

    const [postura, setPostura] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [recursos, setRecursos] = useState(0);
    const [assunto, setAssunto] = useState(0);
    const [comunicacao, setComunicacao] = useState(0);
    const [ideia, setIdeia] = useState(0);
    const [articulacao, setArticulacao] = useState(0);
    const [media, setMedia] = useState(0);

    const [parecer, setParecer] = useState("");

    const configure = (value, func) => {

        if (value) {
            func(Number.parseFloat(value));
        } else {
            func(0);
        }

    }
    useEffect(() => {

        setMedia((postura + tempo + recursos + assunto + comunicacao + ideia + articulacao) / 7)

    }, [postura, tempo, recursos, assunto, comunicacao, ideia, articulacao]);


    const gerar = (event) => {
        const tmpStudent = student ? student : "<INFORMAR>"
        const tmpReviewer = reviewer ? reviewer : "<INFORMAR>"

        let tmp = `Após avaliar o trabalho do(s) aluno(s) '${tmpStudent}', eu, '${tmpReviewer}', indico as seguintes notas para cada critério avaliativo:

        I   Postura Acadêmica = ${postura}
        II  Uso adequado do tempo = ${tempo}
        III Uso adequado dos recursos áudio visuais = ${recursos}
        IV  Domínio do Assunto = ${assunto}
        V   Clareza na Comunicação = ${comunicacao}
        VI  Exposição das Ideias = ${ideia}
        VII Articulação entre a apresentação oral e o trabalho escrito = ${articulacao}

        Sendo assim, a média final da minha avaliação é ${media} .
        `

        if (comment) {
            tmp += `            
        Comentários adicionais: 
        
        ${comment}`
        }

        setParecer(tmp);

    };

    return (
        <>
            <CRow>
                <CCol xs={14}>
                    <CCard className="mb-4">
                        <CCardBody className="row g-2 needs-validation d-flex flex-row align-items-center">
                            <h1>Ficha de Avaliação de TCC - IFPE</h1>
                            <CForm
                                id="AvaliaçãoForm"
                                className="row g-3 needs-validation"
                                noValidate>

                                <CRow xs={{ gutterY: 2 }}>
                                    <h3>Informações da Avaliação</h3>
                                </CRow>
                                <CRow xs={{ gutterY: 2 }}>
                                    <CCol sm={5}>
                                        <CFormLabel htmlFor="inputMembroBanca">Avaliador</CFormLabel>
                                        <CFormInput
                                            className='membroBanca'
                                            id="inputMembroBanca"
                                            onChange={(event) => setReviewer(event.target.value)}
                                            value={reviewer}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                    <CCol sm={6}>
                                        <CFormLabel htmlFor="inputEstudantes">Aluno(s)</CFormLabel>
                                        <CFormInput
                                            className='estudante'
                                            id="inputEstudante"
                                            onChange={(event) => setStudent(event.target.value)}
                                            value={student}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>
                                </CRow>
                                <CRow xs={{ gutterY: 2 }}>
                                    <h3>Critérios de Avaliação</h3>
                                </CRow>

                                <CRow xs={{ gutterY: 2 }}>
                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputPostura">Postura Acadêmica do Estudante</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='postura'
                                            id="inputPostura"
                                            onChange={(event) => configure(event.target.value, setPostura)}
                                            value={postura}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputTempo">Uso adequado do tempo</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='tempo'
                                            id="inputTempo"
                                            onChange={(event) => configure(event.target.value, setTempo)}
                                            value={tempo}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                    <CCol sm={4}>
                                        <CFormLabel htmlFor="inputRecursos">Uso adequado dos recursos áudio visuais</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='recursos'
                                            id="inputRecursos"
                                            onChange={(event) => configure(event.target.value, setRecursos)}
                                            value={recursos}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                </CRow>

                                <CRow xs={{ gutterY: 2 }}>
                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputAssunto">Domínio do Assunto</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='assunto'
                                            id="inputAssunto"
                                            onChange={(event) => configure(event.target.value, setAssunto)}
                                            value={assunto}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputTempo">Clareza na Comunicação</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='comunicacao'
                                            id="inputComunicacao"
                                            onChange={(event) => configure(event.target.value, setComunicacao)}
                                            value={comunicacao}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>

                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputIdeia">Exposição das Ideias</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='ideia'
                                            id="inputIdeia"
                                            onChange={(event) => configure(event.target.value, setIdeia)}
                                            value={ideia}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>
                                </CRow>
                                <CRow xs={{ gutterY: 2 }}>

                                    <CCol sm={5}>
                                        <CFormLabel htmlFor="inputArticulacao">Articulação entre a apresentação oral e o trabalho escrito</CFormLabel>
                                        <CFormInput
                                            type='number'
                                            className='articulacao'
                                            id="inputArticulacao"
                                            onChange={(event) => configure(event.target.value, setArticulacao)}
                                            value={articulacao}
                                            required
                                        >
                                        </CFormInput>
                                    </CCol>


                                    <CCol sm={3}>
                                        <CFormLabel htmlFor="inputMedia">Média Aritmética Final</CFormLabel>
                                        <CFormInput
                                            className='media'
                                            id="inputMedia"
                                            value={media}
                                            required
                                            disabled
                                        >
                                        </CFormInput>
                                    </CCol>
                                </CRow>

                                <CRow xs={{ gutterY: 2 }}>
                                    <CCol sm={15}>
                                        <CFormLabel htmlFor="inputComentario">Comentário (opcional)</CFormLabel>
                                        <CFormTextarea
                                            id="inputComentario"
                                            name="comentario"
                                            placeholder="Digite aqui os seus comentários"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            rows={4}
                                        />
                                    </CCol>
                                </CRow>

                                <CRow xs={{ gutterY: 2 }}>
                                    <div className="jd-grid gap-2 d-md-flex justify-content-md-end">
                                        <CButton onClick={(e) => gerar(e)}>Gerar Parecer</CButton>
                                    </div>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow >
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            Exemplo de Parecer
                        </CCardHeader>
                        <CCardBody>

                            <CFormTextarea
                                id="inputParecer"
                                name="parecer"
                                placeholder="Parecer autogerado"
                                value={parecer}
                                rows={12}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow >
        </>
    )
}

export default Home
