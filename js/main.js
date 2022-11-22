"use strict";

const { createApp } = Vue

  createApp({
    data() {
      return {
        activeChat:0,
        activeOption:0,
        activeReaction:0,
        newText: "",
        searchChat:'',
        activeMessage:0,
        whoRespond:0,
        activeMenu:0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        myEmote:'',
                        status: 'received',
                        option: false,
                        reactions:false
                    }
                ],
            }
        ]
      }
    },
    methods:{
        changeActive(i){
            if(this.activeMenu==0){
                this.activeChat=i;
            }
            
        },

/*------------------
MESSAGE
------------------*/
        addNewMessage(){
            this.whoRespond=this.activeChat;
            const newMessageObj={
                date: new Date().getTime(),
                message: this.newText,
                status: 'sent',
                option:false,
                reactions:false
            }
            this.contacts[this.activeChat].messages.push(newMessageObj);
            this.newText=""
            setTimeout(()=>{
                axios.get('https://api.chucknorris.io/jokes/random')
                .then((response)=>{
                    const result=response.data.value;
                    console.log(result);
                    const newMessageObjResponse={
                        date: new Date().getTime(),
                        message: result,
                        status: 'received',
                        option:false,
                        reactions:false
                    }
                    this.contacts[this.whoRespond].messages.push(newMessageObjResponse);
                })
                
            },1000);
        },

/*------------------
SEARCH
------------------*/
        searchContact(){
            this.contacts.forEach(contact => {
                const compareName=contact.name.slice(0,this.searchChat.length);
                if(this.searchChat.length===0){
                    contact.visible=true;
                }else if(compareName.toUpperCase()===this.searchChat.toUpperCase()){
                    contact.visible=true;
                }else{
                    contact.visible=false;
                }
            });
        },

/*------------------
MENU
------------------*/
        OpenContentMenu(i){
            this.activeMessage=i;
            if(this.activeOption==0 &&this.activeMenu==0&& this.activeReaction==0){
                this.contacts[this.activeChat].messages[this.activeMessage].option=true;
                this.activeOption=1;
            }else if(this.contacts[this.activeChat].messages[this.activeMessage].option==true)   
                {
                    this.contacts[this.activeChat].messages[this.activeMessage].option=false;
                    this.activeOption=0;
                }   
        },
        
/*------------------
DELETE
------------------*/
        deleteText(i){
            this.activeMessage=i;
            this.contacts[this.activeChat].messages.splice(this.activeMessage,1);
            this.activeOption=0;
        },
    }
}).mount('#app')