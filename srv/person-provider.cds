using {Person as P} from '../db/person';

service PersonManagement {
    entity Person as projection on P;
    action Delete(body: array of Person) returns array of Person;
    action Create(body: Person) returns array of {};
}
