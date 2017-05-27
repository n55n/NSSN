package util;

import models.User;
import org.hibernate.Session;

import static util.HibernateUtil.getSessionFactory;

/**
 * Created by denis on 12.03.17.
 */
public class DBUtil {

    public static User getUser(String username) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        Object[] users = session.createQuery("select u from User u where u.username = :username")
                .setParameter("username", username).list().toArray();
        if (users.length == 0)
            return null;
        session.getTransaction().commit();
        session.close();
        return (User) users[0];
    }

}
